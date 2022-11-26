import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';

export const Menu = () => {
    return (
        <div>
            <Button href="/home"><HomeIcon/>ホーム</Button>
            <Button href="/member"><GroupsIcon/>メンバー</Button>
            <Button href="/contribution"><SendIcon/>送る</Button>
        </div>
    );
};