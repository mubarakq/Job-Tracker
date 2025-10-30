import Card from "../components/Card"
import Nav from "../components/Nav"
const Job = () => {
  const jobs :{companyName: string;
    role: string,
    date: string,
    status: string,
    description: string,}[] =[
   {
    companyName: 'Thomas Tech',
    role: 'Web Developer',
    date: '2025-01-12',
    status: 'Applied',
    description: 'Submitted resume through company website.'
  },
  {
    companyName: 'Softlink Systems',
    role: 'Frontend Developer',
    date: '2025-02-05',
    status: 'Interview fixed',
    description: 'Scheduled for first-round technical interview.'
  },
  {
    companyName: 'Green Innovations',
    role: 'UI/UX Designer',
    date: '2025-03-10',
    status: 'Rejected',
    description: 'Received rejection email after final interview.'
  },
  {
    companyName: 'NextGen Labs',
    role: 'Backend Developer',
    date: '2025-04-01',
    status: 'Offer Received',
    description: 'Job offer pending salary negotiation.'
  },
  {
    companyName: 'Bright Future Inc.',
    role: 'Full Stack Developer',
    date: '2025-05-15',
    status: 'Applied',
    description: 'Application sent via LinkedIn Easy Apply.'
  },
  {
    companyName: 'DataWorks',
    role: 'Database Engineer',
    date: '2025-06-07',
    status: 'Interviewed',
    description: 'Completed technical round, awaiting feedback.'
  },
  {
    companyName: 'Alpha Solutions',
    role: 'React Developer',
    date: '2025-07-21',
    status: 'In Progress',
    description: 'Completed coding challenge; waiting for next step.'
  },
  {
    companyName: 'Skyline IT',
    role: 'Web Developer',
    date: '2025-08-03',
    status: 'Rejected',
    description: 'Did not pass first interview round.'
  },
  {
    companyName: 'Nova Creatives',
    role: 'Frontend Developer',
    date: '2025-09-12',
    status: 'Applied',
    description: 'Applied through referral from friend.'
  },
  {
    companyName: 'VisionTech',
    role: 'Software Engineer',
    date: '2025-10-18',
    status: 'Offer Accepted',
    description: 'Accepted full-time offer, onboarding next month.'
  },
  {
  companyName: 'TechNova Labs',
  role: 'Frontend Engineer',
  date: '2025-11-02',
  status: 'Applied',
  description: 'Application submitted via company career portal.'
},
{
  companyName: 'PixelCraft Studio',
  role: 'UI Designer',
  date: '2025-10-15',
  status: 'Interview fixed',
  description: 'Portfolio review interview set for next week.'
},
{
  companyName: 'CyberNet Systems',
  role: 'Backend Engineer',
  date: '2025-09-28',
  status: 'In Progress',
  description: 'Completed coding challenge, awaiting feedback.'
},
{
  companyName: 'BrightApps Ltd.',
  role: 'React Developer',
  date: '2025-08-14',
  status: 'Rejected',
  description: 'Did not proceed past initial HR screening.'
},
{
  companyName: 'Quantum Innovations',
  role: 'Software Engineer',
  date: '2025-07-30',
  status: 'Offer Received',
  description: 'Offer under review for relocation benefits.'
},
{
  companyName: 'CodeWave Tech.',
  role: 'Full Stack Developer',
  date: '2025-06-18',
  status: 'Applied',
  description: 'Applied through Indeed job board.'
},
{
  companyName: 'Visionary Labs',
  role: 'Product Designer',
  date: '2025-05-09',
  status: 'Interviewed',
  description: 'Final round completed, awaiting decision.'
},
{
  companyName: 'SoftCore Digital',
  role: 'Web Developer',
  date: '2025-04-02',
  status: 'Applied',
  description: 'Application sent via referral from colleague.'
},
{
  companyName: 'NexaTech Global',
  role: 'DevOps Engineer',
  date: '2025-03-20',
  status: 'Offer Accepted',
  description: 'Offer accepted, start date next quarter.'
}
  ]

  return (
    <>
    <div className="w-full bg-indigo-700 py-5 flex items-center justify-center z-20 sticky top-0">
        <Nav className="w-full max-w-7xl bg-indigo-700 px-11 flex items-center justify-between"/>
      </div>
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] p-11 gap-2.5">
        {jobs.map((job,index)=>(<Card key={index} companyName={job.companyName} role={job.role} status={job.status} date={job.date} description={job.description}></Card>))}
      </div>
    </div>
    </>
  )
}

export default Job