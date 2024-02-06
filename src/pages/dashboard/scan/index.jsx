import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import TextBox from "../../../elements/textBox";
import Button from "../../../elements/button";
import { motion } from "framer-motion";

function Scan() {
    const [data, setData] = React.useState();

    const [serialNumberValue, setSerialNumberValue] = useState("")
    const [serialNameValue, setSerialNameValue] = useState("")
    //   const [torchOn, setTorchOn] = React.useState(false);


    useEffect(() => {
        // alert(data)
    }, [data])


    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            qrbox: {
                width: 300,
                height: 300
            },
            fps: 5
        })

        scanner.render(success, error)

        function success(result) {
            setData(result)
        }

        function error(err) {
            setData(err)
        }
    }, [])

    console.log('ser', serialNumberValue)
    return (
        <div className='flex flex-col justify-center h-full w-full items-center relative  z-10 '>
            {/* <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      /> */}
            <div className=' w-full h-3/4 max-h-[670px] rounded-2xl'>
                <div id="reader" className="bg-[#d9d9d9cc] text-[#3D3D3D] h-[30vw] min-w-72 max-h-[670px] min-h-60  z-10 ">
                </div>
                <div className="flex items-center flex-col justify-center gap-7 relative top-5">
                    <TextBox placeholder={"serial number"} getValue={setSerialNumberValue} success />
                    {!!serialNumberValue && (
                        <>
                            <motion.div
                                initial={{ y: -20, opacity: [1, 0] }}
                                animate={{ y: 0, opacity: [0, 1] }}
                                transition={{ duration: .5, delay: .2 }}
                            >
                                <TextBox placeholder={"name"} getValue={setSerialNameValue}/>
                            </motion.div>
                            <motion.div
                                initial={{ y: -20, opacity: [1, 0] }}
                                animate={{ y: 0, opacity: [0, 1] }}
                                transition={{ duration: .5, delay: .8 }}
                                className=" w-52"
                            >
                                <Button text={"confirm"} type="success" />
                            </motion.div>

                        </>
                    )}
                </div>
                <br />
                <p>{data}</p>
            </div>
        </div>
    );
}

export default Scan;
