import TopNavBar from '../navigation/TopNavBar';
import SideNavBar from '../navigation/SideNavBar';
import BottomNavBar from '../navigation/BottomNavBar';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <TopNavBar />
      <div className="flex max-w-7xl mx-auto pt-20 px-4 md:px-6">
        <SideNavBar />
        <main className="flex-1 lg:pl-12 py-6 pb-24 md:pb-6">
          <Outlet />
        </main>
      </div>
      <BottomNavBar />
    </div>
  );
}
