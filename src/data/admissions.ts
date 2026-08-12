import type { AdmissionStep } from '@/types/admission'

export const admissionSteps: AdmissionStep[] = [
  { step: '01', title: 'Explore Programs', description: 'Review grade pathways and academic offerings to find the right fit for your child.' },
  { step: '02', title: 'Submit Application', description: 'Complete the online inquiry or application form with accurate student and guardian details.' },
  { step: '03', title: 'Document Review', description: 'Our admissions team verifies previous records, identification, and supporting documents.' },
  { step: '04', title: 'Assessment / Interview', description: 'Age-appropriate academic assessment and a brief family conversation help us understand readiness.' },
  { step: '05', title: 'Admission Decision', description: 'Families receive a clear decision with next steps, fee guidance, and enrollment timelines.' },
  { step: '06', title: 'Enrollment', description: 'Confirm your place, complete fee formalities, and prepare for a confident start at TSS Mial.' },
]

export const admissionRequirements = [
  'Completed application / inquiry form',
  'Birth certificate or B-Form',
  'Previous school report cards (where applicable)',
  'Student photographs',
  'Parent / guardian CNIC copies',
  'Transfer certificate (for mid-year or secondary entrants)',
]

export const importantDates = [
  { label: 'Applications open', value: 'Rolling admissions with priority windows each term' },
  { label: 'Assessment days', value: 'Scheduled after document review' },
  { label: 'Decision timeline', value: 'Typically within 7–10 working days after assessment' },
  { label: 'Orientation', value: 'Shared with confirmed families before term start' },
]

export const feeOverview = [
  { title: 'Tuition', text: 'Grade-based tuition structure communicated during the admissions offer.' },
  { title: 'Admission / registration', text: 'One-time charges may apply at enrollment. Details are provided with the offer letter.' },
  { title: 'Scholarships', text: 'Merit and need-based considerations may be available for eligible families.' },
]

export const gradeOptions = [
  'Pre-Nursery', 'Nursery', 'Kindergarten',
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
]
