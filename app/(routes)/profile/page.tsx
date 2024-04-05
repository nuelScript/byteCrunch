"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BreadcrumbComponent } from "./_components/breadcrumb";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="flex flex-col space-y-4 py-8 px-[90px]">
      <BreadcrumbComponent />
      <Tabs defaultValue="my_profile" className="w-full flex space-x-8">
        <TabsList className="grid grid-cols-1 h-full grid-rows-4 bg-[#FCA644] text-white">
          <TabsTrigger
            value="my_profile"
            className="uppercase data-[state=active]:bg-black data-[state=active]:text-white"
          >
            My Profile
          </TabsTrigger>
          <TabsTrigger
            value="hall_and_room"
            className="uppercase data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Change hall & room no.
          </TabsTrigger>
          <TabsTrigger
            value="telegram_no"
            className="uppercase data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Telegram No.
          </TabsTrigger>
          <TabsTrigger
            value="change_email"
            className="uppercase data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Change Email
          </TabsTrigger>
        </TabsList>
        <TabsContent value="my_profile">
          <Card className="border-[#FCA644]">
            <CardContent className="space-y-6 py-6 bg-[#FCA644]/30 rounded-md">
              <p className="uppercase">Name: {data?.user.name}</p>
              <p className="uppercase">Matric Number: </p>
              <p className="uppercase">Telegram Number:</p>
              <p className="uppercase">Email: {data?.user.email}</p>
              <p className="uppercase">Hall & Room Number:</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hall_and_room">
          <Card>
            <CardContent className="space-y-6"></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="telegram_no">
          <Card>
            <CardContent className="space-y-6"></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="change_email">
          <Card>
            <CardContent className="space-y-6"></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
