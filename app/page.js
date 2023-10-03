'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="w-[50%] max-w-[50%]">
        <div className="flex justify-center">
          <div className="center">
            <div className="organogram">
              <div className="main cc" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath')}>
                <span>
                  <Image src="/logo3.png" alt="Clickable Image" width={100} height={100} style={{ cursor: 'pointer' }} />
                </span>
              </div>
              <div className="sub tl" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath2/1')}><span>CM&I </span></div>
              <div className="sub tc" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath/1')}><span>CSO</span></div>
              <div className="sub tr" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath/1')}><span>CHRO</span></div>
              <div className="sub cl" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath/1')}><span>CLO</span></div>
              <div className="sub cr" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath/1')}><span>CFO</span></div>
              <div className="sub bl" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath/1')}><span>MD</span></div>
              <div className="sub bc" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath/1')}><span>CPO</span></div>
              <div className="sub br" style={{ cursor: 'pointer' }} onClick={() => router.push('/careerpath/1')}><span>CMO</span></div>
            </div>
            <Link href="/careerpath">
              <h1 className="text-4xl italic text-center text-gray-800 font-sans py-4">
                ASPIRE <span className="text-red-500">BUILD</span> <span className="text-green-500">CONQUER</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
