import { useLocation } from 'react-router-dom';
import greenLogo from '../../assets/green.lo-go.svg';
import whiteLogo from '../../assets/white.lo-go.svg';
import { Pathnames } from '../../enums/paths';

interface IDisconnectedContainerProps {
  children: React.ReactNode;
}

export const DisconnectedContainer = (props: IDisconnectedContainerProps) => {
  const { pathname }: Partial<Location> = useLocation();

  const isNotDashboard: boolean = pathname !== Pathnames.Dashboard;

  return (
    <div className="min-h-screen md:flex md:flex-row-reverse md:bg-[url('/src/assets/phone.svg')] md:bg-cover md:bg-opacity-95 md:bg-no-repeat">
      <aside className="relative flex justify-center bg-[url('/src/assets/phone.svg')] bg-opacity-95 bg-cover bg-no-repeat w-full h-64 md:w-1/2 md:h-full md:bg-none">
        {isNotDashboard ? (
          <img src={whiteLogo} alt='Logo' className='w-[210px] md:hidden' />
        ) : null}

        <div className='absolute -bottom-0 w-full h-[69px] rounded-t-full bg-brand-100 md:hidden'>
          <div className='absolute -bottom-0 w-full h-[59px] rounded-t-full bg-brand-200'>
            <div className='absolute -bottom-0 w-full h-[49px] rounded-t-full bg-grey-50'></div>
          </div>
        </div>
      </aside>

      <main className='bg-grey-50 grid content-center justify-items-center grid-cols-1 gap-[30px] px-12 pb-12 w-full md:flex-1 md:py-16 md:max-h-full'>
        {isNotDashboard ? (
          <header className='hidden md:block w-[210px]'>
            <img src={greenLogo} alt='Logo' />
          </header>
        ) : null}

        {props.children}
      </main>
    </div>
  );
};
