import React from 'react';
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

TPrinter.propTypes = {

};

function TPrinter(props) {
    let printer = new ThermalPrinter({
        type: PrinterTypes.STAR,                                  // Printer type: 'star' or 'epson'
        interface: 'tcp://xxx.xxx.xxx.xxx',                       // Printer interface
        characterSet: 'SLOVENIA',                                 // Printer character set - default: SLOVENIA
        removeSpecialCharacters: false,                           // Removes special characters - default: false
        lineCharacter: "=",                                       // Set character for lines - default: "-"
        options: {                                                 // Additional options
            timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
        }
    });

    const handleClick = async () => {
        printer.print("Hello World");
        printer.printQR("QR CODE");
        await printer.printImage('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg');
        // try {
        //     let execute = await printer.execute();
        //     console.log('Done')
        // } catch (error) {
        //     console.log(error);
        // }
    }
    return (
        <div>
            <button onClick={() => handleClick()}>Print</button>
        </div>
    );
}

export default TPrinter;