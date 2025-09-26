export interface User {
  id: string;
  email: string;
  full_name: string;
  disability_type: string;
  education_level: string;
  skills: string[];
  location: string;
  phone: string;
  is_parent_guardian: boolean;
  created_at: string;
}

export interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  requirements: string[];
  disability_categories: string[];
  application_deadline: string;
  salary_range: string;
  job_type: 'government' | 'psu' | 'private';
  is_active: boolean;
  created_at: string;
}

export interface CoachingCenter {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  contact_phone: string;
  contact_email: string;
  services: string[];
  disability_specializations: string[];
  fees_structure: string;
  created_at: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  exam_type: string;
  content_type: 'pdf' | 'video' | 'audio' | 'text';
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  file_url?: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'job_alert' | 'deadline_reminder' | 'training_update' | 'general';
  is_read: boolean;
  created_at: string;
}