import { useState } from "react"

function Button() {
    const [color, setColor] = useState("#000000")

    function handleColor(e) {
        setColor(e.target.value)
    }

    return (
        <>
            <div className="flex flex-row items-center mt-10 space-y-4">
                <h1 className="text-5xl font-bold">Color Picker</h1>
                
                <label className="text-xl">Select a color:</label>
                <input 
                    className="h-20 w-1/4 cursor-pointer" 
                    type="color" 
                    value={color}
                    onChange={handleColor}
                />

                <h1 className="text-2xl">Selected Color: {color}</h1>

                <div 
                    className="h-24 w-24 border rounded" 
                    style={{ backgroundColor: color }}
                />
            </div>
        </>
    )
}

export default Button
