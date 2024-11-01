import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



function ThisAvtar() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
}

export default ThisAvtar;