const tailwindThemeClasses = {
    colors: {
        primary: 'bg-cyan-600 text-white',
        secondary: 'bg-purple-600 text-white',
        success: 'bg-green-600 text-white'
    },

    radius: {
        none: 'rounded-none',
        xs:'rounded',
        sm:'rounded',
        md:'rounded-md',
        lg:'rounded-lg',
        xl:'rounded-full',
    }, 
    padding:{
        xl:  'px-10 py-5',
        lg: 'px-5 py-3',
        md:'px-5 py-3',
        sm:'px-3 py-2',
        xs:'px-2 py-1',
    }, 

    sizes:{
        xs:'size-2',
        sm:'size-2.5',
        md:'size-3',
        lg:'size-4',
        xl:'size-5',

    },
    accentcolor: {
        primary: 'accent-blue-500',
        secondary: 'accent-yellow-500',
        success: 'accent-green-500',
        warning: 'accent-yellow-500',
        danger: 'accent-red-500',
        info: 'accent-blue-500',
        dark: 'accent-gray-500',
        light: 'accent-white',
    },

    textcolor: {
        light: 'text-white',
        dark: 'text-black',
    },
    textsize: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
    }

}

const cssColors = {
    colors: {
        primary: '#1E3A8A',
         light: '#E5E7EB',
         dark: '#4B5563',
         info : '#3B82F6',
         danger: '#B91C1C',
         warning: '#F59E0B',
         success: '#047857',
         secondary: '#F59E0B',
    }
}
const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'

}

export {tailwindThemeClasses, alignmentClasses,cssColors};