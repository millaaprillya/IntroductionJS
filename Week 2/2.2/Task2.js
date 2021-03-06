const getMonths = (callback) => {
    setTimeout(() => {
        let error = true
        let months = [
            'Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus',
            'September', 'Oktober', 'November', 'Desember'
        ]

        if (!error) {
            callback(null, months)
        } else {
            callback(new Error('Data not found'))
        }
    }, 4000)
}

const showMonths = (err, dataMonths) => {
    if (err === null) {
        const show = dataMonths
        show.map((item) => {
            console.log(item)
        })
    } else {
        console.log(err.message)
    }
}

getMonths(showMonths)