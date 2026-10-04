"use client";

import { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import {
  Heart,
  Home,
  LayoutDashboard,
  LayoutPanelTop,
  LogOut,
  MapPinHouse,
  MessageCircleQuestionMark,
  Package,
  ScrollText,
  Settings,
  ShoppingCart,
  SquareDashedPlus,
  SquareUserRound,
  User,
  UserGroup,
} from "lucide-react";
import { AlarmClock, Clock, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";

// DRAWER
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// DROPDOWN MENU
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// AVATAR
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Bottom() {
  const [open, setOpen] = useState(false);

  // For adding onlcick animation
  const [bottomButton, setBottomButton] = useState("Home");

  const { data: session, status } = useSession();

  return (
    <div className="md:hidden sticky bottom-0 z-50 bg-white w-full">
      <ul className="flex w-full items-center px-3 py-3 border-3 justify-between gap-5 text-sm text-white font-light">
        <Link href="/">
          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center">
            <Home />
            Home
          </li>
        </Link>
        {/* CATEGORY SWIPE HANDLE */}
        <Drawer showSwipeHandle open={open} onOpenChange={setOpen}>
          <DrawerTrigger
            render={
              <button className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
                <LayoutPanelTop />
                <Link href="">Categories</Link>
              </button>
            }
          />
          <DrawerContent className="bg-white rounded-t-2xl overflow-hidden  ">
            <DrawerHeader>
              <DrawerTitle>Categories</DrawerTitle>
              <DrawerDescription>Select your category</DrawerDescription>
            </DrawerHeader>
            <div className="w-full flex gap-2 p-4 items-center justify-center">
              <Link
                href="/?category=Men#collection"
                onClick={() => setOpen(false)}
              >
                <Button className={"rounded-2xl"}>Men</Button>
              </Link>
              <Link
                href="/?category=Women#collection"
                onClick={() => setOpen(false)}
              >
                <Button className={"rounded-2xl"}>Women</Button>{" "}
              </Link>
              <Link
                href="/?category=Kids#collection"
                onClick={() => setOpen(false)}
              >
                <Button className={"rounded-2xl"}>Kids</Button>{" "}
              </Link>
              <Button className={"rounded-2xl"} onClick={() => setOpen(false)}>
                For you
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <h2>Shop By Type</h2>
              <div className="flex items-center justify-center gap-2 my-3">
                <span className="border-2 border-black rounded p-2">
                  <Watch className="" size={44} />
                </span>
                <span className="border-2 border-black rounded p-2">
                  <Clock size={44} />
                </span>
                <span className="border-2 border-black rounded p-2">
                  <AlarmClock size={44} />
                </span>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose
                render={<Button>Close</Button>}
                className="rounded-sm"
              />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Link href="/error">
          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
            <Heart />
            WishList
          </li>
        </Link>

        <Link href="/error">
          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
            <ShoppingCart />
            Cart
          </li>
        </Link>
        {/* DROPDOWN MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
                <SquareUserRound />
                <Link href="">Profile</Link>
              </button>
            }
          />

          {session ? (
            // user is logged in
            <DropdownMenuContent className="w-1xl p-2 rounded-xl">
              <DropdownMenuGroup>
                {/* USER IS NOT ADMIN */}

                <DropdownMenuItem className={"flex items-center gap-4"}>
                  <Avatar>
                    <AvatarImage
                      src={session?.user.image}
                      alt="@shadcn"
                      className=""
                    />
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    {session?.user.name}
                    <div>{session?.user.email} </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className={"h-10 text-sm"}>
                  <Package />
                  My Orders
                </DropdownMenuItem>
                <DropdownMenuItem className={"h-10 text-sm"}>
                  <MapPinHouse />
                  Addresses
                </DropdownMenuItem>
                <DropdownMenuItem className={"h-10 text-sm"}>
                  <Settings />
                  Settings
                </DropdownMenuItem>

                {/* USER IS A ADMIN */}
                <DropdownMenuItem className={"flex items-center gap-4"}>
                  <Avatar>
                    <AvatarImage
                      src={session?.user.image}
                      alt="@shadcn"
                      className=""
                    />
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                  </Avatar>
                  <div>
                    <div className="flex justify-between gap-4">
                      <span>{session?.user.name}</span>
                      <span className=" bg-green-400 text-green-900 px-2 rounded-sm ">
                        Admin
                      </span>
                    </div>
                    <div>Store Owner</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className={"h-10 text-sm"}>
                  <LayoutDashboard />
                  Dashboard
                </DropdownMenuItem>
                <Link href={"/additem"}>
                  <DropdownMenuItem className={"h-10 text-sm"}>
                    <SquareDashedPlus />
                    Add item
                  </DropdownMenuItem>
                </Link>

                <Link href={"/listitem"}>
                  <DropdownMenuItem className={"h-10 text-sm"}>
                    <ScrollText />
                    products data
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className={"h-10 text-sm"}>
                  <UserGroup />
                  Customers
                </DropdownMenuItem>

                <DropdownMenuSeparator />
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                className={"text-red-600 text-sm hover:text-red-600 "}
              >
                <LogOut />
                <button onClick={() => signOut("google", { callbackUrl: "/" })}>
                  Log Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            // USer is not logged in
            <DropdownMenuContent className="w-1xl text-3xl rounded-xl">
              <DropdownMenuGroup>
                <DropdownMenuItem className={"flex items-center gap-4"}>
                  {/* AVATAR */}
                  <Avatar>
                    <AvatarImage
                      src={session?.user.image}
                      alt=""
                      className=""
                    />

                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <button
                      onClick={() => signIn("google", { callbackUrl: "/" })}
                    >
                      Sign in
                    </button>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem className={"text-sm"}>
                  <Settings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className={"text-sm"}>
                  <MessageCircleQuestionMark />
                  Help & Support
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </ul>
    </div>
  );
}
