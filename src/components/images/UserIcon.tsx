import Svg, { Circle, Path } from 'react-native-svg';

const UserIcon = ({ color = '#fff' }: { color: string }) => {
    return (
        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <Circle cx="12" cy="7" r="4"/>
        </Svg>
    );
}

export default UserIcon;