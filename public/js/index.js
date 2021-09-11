window.addEventListener('load', () => {
    let table = document.querySelector('table');

    const memeList = async () => {
        let res = await fetch('https://api.imgflip.com/get_memes');
        let data = await res.json();
        let memeArray = data.data.memes;
    
        for(let i = 0; i< memeArray.length; i++){
            memeRow(memeArray[i]);
        };
    
        function memeRow(meme) {
            table.innerHTML += `
            <tr>
                <td>${meme.id}</td>
                <td>${meme.name}</td>
                <td><img src="${meme.url}" alt="${meme.name} Image"/></td>
                <td><a href="${meme.url}" target="_blank">Click here</a></td>
            </tr>
            `
        };
    };
    memeList();
});