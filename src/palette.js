// #FFD31D, #D63447, #F57B51, #F6EEDF 

export default function palette(inputColor)  {
    const palette =  {
        'primary': '#ffd31d',
        'secondary': '#d63447',
        'yellow': '#ffd31d',
        'red': '#d63447',
        'orange': '#f57b51',
        'white': '#f6eedf'    
    }
    const lowerColor = inputColor.toLowerCase();

    if (lowerColor in palette){
        return palette[lowerColor];
    }
    else {
        return lowerColor;
    }
};