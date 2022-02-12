const fs = require('fs');
const dirName = process.argv[process.argv.length - 1];
const fileName = dirName[0].toLowerCase() + dirName.substr(1);

const tsxContent = 
`import s from './${fileName}.module.css'
export default function ${dirName}() {
    return (
        <div className={s.${fileName}}>
            
        </div>
    )
}
`
if (!fs.existsSync(dirName)){
    fs.mkdirSync(dirName);

    fs.appendFile(`./${dirName + '/' + fileName}.tsx`, tsxContent, function(err, data) {});
    fs.appendFile(`./${dirName + '/' + fileName}.module.css`, '', function(err, data) {});

} else {
    console.log('This folder already');
}