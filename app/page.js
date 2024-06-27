import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { FaMapMarkerAlt, FaCoins } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>

      {/* top navbar */}
      <div className='w-full flex items-center justify-between px-2 py-4'>

        <Link href='/home' className='text-orange-600 bg-gray-200 px-4 py-2'>Logo</Link>   

        <div className='flex flex-row space-x-6 border rounded-2xl text-sm'>
          <Button variant='ghost' size='sm'>
            <Image src='/suitcase.png' alt='Jobs' width={20} height={20} className='rounded-full mr-1.5' />
            Jobs
          </Button>
          <Button variant='ghost' size='sm'>
            <Image src='/messages.png' alt='Messages' width={20} height={20} className='rounded-full mr-1.5' />
            Messages
          </Button>
          <Button variant='ghost' size='sm'>
            <Image src='/hand.png' alt='Payments' width={20} height={20} className='rounded-full mr-1.5' />
            Payments
          </Button>
        </div>

        <div className='flex flex-row -px-2 gap-3'>
          <Image src='/notification-bell.png' alt='notification-bell' width={25} height={5} className='rounded-full'/>  
          <Image src='/atlassian.jpg' alt='atlassian' width={25} height={5} className='rounded-full'/>
          <Image src='/down.png' alt='arrow' width={20} height={20} className='rounded-full'/>  
        </div>
      
      </div>



      {/* sub navbar */}
      <div className='flex items-center justify-right px-8 py-8 -mb-10 -mt-4 space-x-5'>
        <Button variant='link'>Job Preview</Button>
        <Button variant='link'>Applicants</Button>
        <Button variant='link'>Match</Button>
        <Button variant='link'>Messages</Button>
      </div>



      <div className='flex justify-between'>
        <div>
          {/* Job role*/}
          <div className='flex flex-row px-10 py-10 gap-3 items-center'>
            <h1 className='font-bold text-2xl px-2'>Senior Product Designer</h1>
            <div className='flex items-center'>
              <span className="flex items-center justify-center w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
              <p className='text-gray-500 text-xs'>posted 2 days ago</p>
            </div>
            <div className='flex items-center px-2 py-0.5 text-xs bg-green-50 text-green-600 rounded-full border border-green-200'>
              <span className='flex items-center justify-center w-1.5 h-1.5 bg-green-600 rounded-full mr-2'></span>
              Open
            </div>
          </div>



          {/* job location */}
          <div className='flex items-center space-x-5 px-11 -mt-5 text-gray-600 text-sm'>
            <FaMapMarkerAlt />
            <h1>Delaware, USA</h1>
            <span className='flex items-center justify-center w-1.5 h-1.5 bg-slate-300 rounded-full mr-2'></span>
            <FaCoins />
            <h1>$300k-$400k</h1>
          </div>



          {/* skills required */}
          <div className='flex flex-col md:flex-row justify-right items-center px-10 py-10 gap-10'>
            <div className='flex flex-col space-y-2'>
              <h3 className='text-gray-600 text-xs'>Skills Required</h3>
              <Button variant='outline' size='xxs'>
                <Image src = '/figma.jpg' alt='figma' width={10} height={10} className='mr-1.5'/>
                <h5 className='text-sm'>Figma</h5>
              </Button>
              <Button variant='outline'size='md' >
                <Image src = '/adobe-illustrator.jpg' alt='adobe-illustrator' width={20} height={20} className='mr-1.5 -ml-2'/>
                <h5 className='text-sm'>Adobe Illustrator</h5>
              </Button>
              <Button variant='outline' size='xs'>
                <Image src = '/adobe-xd-1.png' alt='adobe-XD' width={16} height={16} className='mr-1.5 -ml-14'/>
                <h5 className='text-sm'>Adobe XD</h5>
              </Button>
            </div>

            <div className='text-center mb-4'>
              <h3 className='text-gray-700 text-xs'>Preffered Language</h3>
              <h5 className='font-bold text-black text-sm mt-1'>English</h5>
            </div>

            <div className='text-center mb-4'>
              <h3 className='text-gray-600 text-xs'>Type</h3>
              <h5 className='font-bold text-black text-sm mt-1'>Full Time</h5>
            </div>

            <div className='text-center mb-4'>
              <h3 className='text-gray-600 text-xs'>Years of Experience</h3>
              <h5 className='font-bold text-black text-sm mt-1'>3+ Years of Experience</h5>
            </div>
          </div>
        </div>



        {/* delete & edit job */}
        <div className='px-2 mt-10 text-sm'>
          <div className='flex items-center justify-end space-x-2.5 mb-7 text-gray-600'>
            <Button variant='outline_colored' size='lg'>
              <Image src='/trash.png' alt='trash' width={15} height={15} className='mr-2' />
              Delete job
            </Button>
            <Button variant='outline_colored' size='lg'>
              <Image src='/edit.png' alt='edit' width={15} height={15} className='mr-2' />
              Edit job
            </Button>
          </div>

          <div className='flex justify-between'>
            <div className='flex flex-col space-y-8'>
              <div className='flex items-center space-x-2 ml-2'>
                <Image src='/applicants.png' width={20} height={20} />
                <p>Applicants</p>
              </div>
              <div className='flex items-center space-x-2 ml-2'>
                <Image src='/matches.png' width={20} height={20} />
                <p>Matches</p>
              </div>
              <div className='flex items-center space-x-2 ml-2'>
                <Image src='/message.png' width={20} height={15} />
                <p>Messages</p>
              </div>
              <div className='flex items-center space-x-2 ml-2'>
                <Image src='/views.png' width={20} height={20} />
                <p>Views</p>
              </div>
            </div>

            <div className='flex flex-col space-y-8'>
              <p className='font-semibold mr-10'>400</p>
              <p className='font-semibold'>100</p>
              <p className='font-semibold'>147</p>
              <p className='font-semibold'>800</p>
            </div>
          </div>
        </div>
      </div>



      {/* about the job */}
      <div className='py-5 px-10 flex-items-justify'>
        <h3 className='text-gray-500 py-2 text-xs'>About the job</h3>
        <ol className="list-decimal pl-4 space-y-1 text-sm">
          <li>Handle the UI/UX research design</li>
          <li>Work on researching on latest web applications designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic related works</li>
        </ol>

        <h3 className='py-2 text-sm'>Benefits:</h3>
        <ul className='list-disc pl-4 space-y-2 ml-4  text-sm'>
          <li>Health Insurance</li>
          <li>Provident Fund</li>
        </ul>

        <h3 className='py-2 text-sm'>Schedule:</h3>
        <ul className='list-disc pl-4 space-y-2 ml-4  text-sm'>
          <li>Day Shift</li>
        </ul>

        <h3 className='py-2 text-sm'>Supplement pay types:</h3>
        <ul className='list-disc pl-4 space-y-2 ml-4 text-sm'>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>

        <h3 className='py-2 text-sm'>Work Location: In person</h3>
      </div>



      {/* info about atlassian */}
      <div className='py-10 px-10'>
        <div className='flex items-center mb-6'>
          <Image src='/atlassian.jpg' alt='atlassian' width={30} height={30} />
          <h1 className='text-gray-600'>Atlassian</h1>
        </div>

        <div className='grid grid-cols-2 gap-y-4'>
          <div>
            <h3 className='text-gray-500 text-xs'>Company size</h3>
            <h5 className='text-sm'>1k - 2k Employees</h5>
          </div>
          <div className='-ml-20'>
            <h3 className='text-gray-500 text-xs'>Type</h3>
            <h5 className='text-sm'>Private</h5>
          </div>
          <div>
            <h3 className='text-gray-500 text-xs'>Sector</h3>
            <h5 className='text-sm'>Information Technology, Infrastructure</h5>
          </div>
          <div className='-ml-20'>
            <h3 className='text-gray-500 text-xs'>Funding</h3>
            <h5 className='text-sm'>Bootstrapped</h5>
          </div>
          <div>
            <h3 className='text-gray-500 text-xs'>Founded in</h3>
            <h5 className='text-sm'>2019</h5>
          </div>
          <div className='-ml-20'>
            <h3 className='text-gray-500 text-xs'>Founded By</h3>
            <h5 className='text-sm'>Scott Farquhar, Mike Cannon-Brookes</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
