/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/iSqcF7ExarF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export function AdminPanel() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-64 bg-gray-900 text-white md:block">
        <div className="flex h-16 items-center justify-between px-6">
          <Link className="text-lg font-bold" href="#">
            SaaS Admin
          </Link>
          <MenuIcon className="h-6 w-6 cursor-pointer" />
        </div>
        <nav className="mt-6 space-y-1 px-6">
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <UsersIcon className="mr-3 h-5 w-5" />
            Users
          </Link>
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <DollarSignIcon className="mr-3 h-5 w-5" />
            Billing
          </Link>
          <Link className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
            <SettingsIcon className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
      </div>
      <div className="flex-1">
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <MenuIcon className="h-6 w-6 cursor-pointer md:hidden" />
            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex cursor-pointer items-center space-x-2">
                <img
                  alt="User Avatar"
                  className="h-8 w-8 rounded-full"
                  height={32}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32}
                />
                <span className="text-sm font-medium">John Doe</span>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Total Users</CardTitle>
                <UsersIcon className="h-6 w-6 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,234</div>
                <p className="text-sm text-gray-500">
                  <span className="text-green-500">+5.2%</span>
                  from last month{"\n"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Total Revenue</CardTitle>
                <DollarSignIcon className="h-6 w-6 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$45,231.89</div>
                <p className="text-sm text-gray-500">
                  <span className="text-green-500">+8.3%</span>
                  from last month{"\n"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Active Subscriptions</CardTitle>
                <CreditCardIcon className="h-6 w-6 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,345</div>
                <p className="text-sm text-gray-500">
                  <span className="text-green-500">+3.1%</span>
                  from last month{"\n"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Conversion Rate</CardTitle>
                <PercentIcon className="h-6 w-6 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">14.7%</div>
                <p className="text-sm text-gray-500">
                  <span className="text-red-500">-1.2%</span>
                  from last month{"\n"}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Month</CardTitle>
                <CardDescription>A line chart showing the monthly revenue.</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>New Users by Source</CardTitle>
                <CardDescription>A pie chart showing the sources of new users.</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Signups</CardTitle>
                <CardDescription>A table of the most recent user signups.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>2023-05-01</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View User</DropdownMenuItem>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Delete User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>2023-04-28</TableCell>
                      <TableCell>Starter</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View User</DropdownMenuItem>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Delete User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell>bob@example.com</TableCell>
                      <TableCell>2023-04-25</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View User</DropdownMenuItem>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Delete User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function PercentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function PieChart(props: any) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
