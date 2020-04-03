const mapApiKey = process.env.REACT_APP_MAP_API_KEY

export const lightModeMap = `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key${mapApiKey}`
export const darkModeMap = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key${mapApiKey}`
