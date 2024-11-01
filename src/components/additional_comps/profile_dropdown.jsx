
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThisAvtar from "./avtar";

function MyDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><ThisAvtar/></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                <DropdownMenuItem>Summary</DropdownMenuItem>
                <DropdownMenuItem>Generate Report</DropdownMenuItem>
                <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default MyDropdown;
