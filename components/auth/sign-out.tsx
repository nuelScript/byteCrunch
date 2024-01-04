import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const SignOutButton = async () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};
