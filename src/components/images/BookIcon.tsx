import Svg, { Path } from 'react-native-svg';

const BookIcon = ({ color = '#fff' }: { color: string }) => {
    return (
        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M10 2v8l3-3 3 3V2"/>
            <Path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>      
        </Svg>
    );
}

export default BookIcon;