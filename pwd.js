module.exports = function pwd() {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim()
        if (cmd === 'pwd') {
            process.stdout.write(process.env.PWD)
            process.stdout.write('\nprompt > ')
        } 
    })
}
