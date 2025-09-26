/*
  # Initial Database Schema for Udyog Saarthi

  1. New Tables
    - `users`
      - `id` (uuid, primary key) 
      - `email` (text, unique)
      - `full_name` (text)
      - `disability_type` (text)
      - `education_level` (text) 
      - `skills` (text array)
      - `location` (text)
      - `phone` (text)
      - `is_parent_guardian` (boolean)
      - `created_at` (timestamp)

    - `jobs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `organization` (text)
      - `location` (text)
      - `description` (text)
      - `requirements` (text array)
      - `disability_categories` (text array)
      - `application_deadline` (date)
      - `salary_range` (text)
      - `job_type` (enum: government, psu, private)
      - `is_active` (boolean)
      - `created_at` (timestamp)

    - `coaching_centers`
      - `id` (uuid, primary key)
      - `name` (text)
      - `address` (text)
      - `city` (text)
      - `state` (text)
      - `contact_phone` (text)
      - `contact_email` (text)
      - `services` (text array)
      - `disability_specializations` (text array)
      - `fees_structure` (text)
      - `created_at` (timestamp)

    - `study_materials`
      - `id` (uuid, primary key)
      - `title` (text)
      - `subject` (text)
      - `exam_type` (text)
      - `content_type` (enum: pdf, video, audio, text)
      - `difficulty_level` (enum: beginner, intermediate, advanced)
      - `description` (text)
      - `file_url` (text, optional)
      - `created_at` (timestamp)

    - `notifications`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `title` (text)
      - `message` (text)
      - `type` (enum: job_alert, deadline_reminder, training_update, general)
      - `is_read` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Public read access for jobs, coaching centers, and study materials
*/

-- Create enum types
CREATE TYPE job_type AS ENUM ('government', 'psu', 'private');
CREATE TYPE content_type AS ENUM ('pdf', 'video', 'audio', 'text');
CREATE TYPE difficulty_level AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE notification_type AS ENUM ('job_alert', 'deadline_reminder', 'training_update', 'general');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  disability_type text NOT NULL,
  education_level text NOT NULL,
  skills text[] DEFAULT '{}',
  location text NOT NULL,
  phone text NOT NULL,
  is_parent_guardian boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  organization text NOT NULL,
  location text NOT NULL,
  description text NOT NULL,
  requirements text[] DEFAULT '{}',
  disability_categories text[] DEFAULT '{}',
  application_deadline date NOT NULL,
  salary_range text DEFAULT '',
  job_type job_type NOT NULL DEFAULT 'government',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create coaching_centers table
CREATE TABLE IF NOT EXISTS coaching_centers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  contact_phone text NOT NULL,
  contact_email text DEFAULT '',
  services text[] DEFAULT '{}',
  disability_specializations text[] DEFAULT '{}',
  fees_structure text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create study_materials table
CREATE TABLE IF NOT EXISTS study_materials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subject text NOT NULL,
  exam_type text NOT NULL,
  content_type content_type NOT NULL DEFAULT 'text',
  difficulty_level difficulty_level NOT NULL DEFAULT 'beginner',
  description text NOT NULL,
  file_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  title text NOT NULL,
  message text NOT NULL,
  type notification_type NOT NULL DEFAULT 'general',
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE coaching_centers ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create policies for jobs table (public read access)
CREATE POLICY "Anyone can read active jobs"
  ON jobs
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create policies for coaching_centers table (public read access)
CREATE POLICY "Anyone can read coaching centers"
  ON coaching_centers
  FOR SELECT
  TO public
  USING (true);

-- Create policies for study_materials table (public read access)
CREATE POLICY "Anyone can read study materials"
  ON study_materials
  FOR SELECT
  TO public
  USING (true);

-- Create policies for notifications table
CREATE POLICY "Users can read own notifications"
  ON notifications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications"
  ON notifications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jobs_location ON jobs(location);
CREATE INDEX IF NOT EXISTS idx_jobs_job_type ON jobs(job_type);
CREATE INDEX IF NOT EXISTS idx_jobs_deadline ON jobs(application_deadline);
CREATE INDEX IF NOT EXISTS idx_jobs_active ON jobs(is_active);
CREATE INDEX IF NOT EXISTS idx_coaching_centers_city ON coaching_centers(city);
CREATE INDEX IF NOT EXISTS idx_coaching_centers_state ON coaching_centers(state);
CREATE INDEX IF NOT EXISTS idx_study_materials_subject ON study_materials(subject);
CREATE INDEX IF NOT EXISTS idx_study_materials_exam_type ON study_materials(exam_type);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);