// #FFD31D, #D63447, #F57B51, #F6EEDF 

export default function palette(inputColor)  {
    const palette =  {
        'primary': '#ffd31d',
        'secondary': '#d63447',
        'yellow': '#ffd31d',
        'red': '#d63447',
        'orange': '#f57b51',
        'white': '#f6eedf',
        'google': '#dd4b39',
        'twitter': '#1DA1F2',
        'facebook': '#1877F2',
        'primaryfade': 'rgba(255, 230, 128, .6)',
        'orangefade': 'rgba(249, 163, 134, .6)',
        'secondaryfade': 'rgba(226, 106, 118, .6)'    
    }
    const lowerColor = inputColor.toLowerCase();

    if (lowerColor in palette){
        return palette[lowerColor];
    }
    else {
        return lowerColor;
    }
};