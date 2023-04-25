import { Web3Storage } from 'web3.storage';

//web3.storage config
const WEB3STORAGE_TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdhNjRCZEZmZjIwNjQ3ZDVmOTAwMEEyMmI5QkRFZTgxRDRlNDcwMjAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODI0MTgyMjg3NjUsIm5hbWUiOiJkZW5pemVuX2ZpbGVfdXBsb2FkcyJ9.rzqyAj-Lq1v0DxmRPW98pJmFpv-LTBzZRN34t5bErIs'
function getAccessToken() {
    return WEB3STORAGE_TOKEN
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

//function to upload file to web3.storage server
export const uploadImage = async function storeFiles (files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('Stored files with cid:', cid)
    return cid
}

//function to gett file pass selector as class or id 
export function getFiles (selector) {
    const fileInput = document.querySelector(selector)
    return fileInput.files
}

//function to gett filename pass selector as class or id 
export function getFileName (selector) {
    const fileInput = document.querySelector(selector)
    return fileInput.files[0].name
}
//To make a gateway link, use https://<cid>.ipfs.<gateway-host>/<filename> 
//https://<gateway-host>/ipfs/<cid>/<filename>, 
//where <gateway-host> is the address of an HTTP gateway like dweb.link.

//for e.g.
//https://bafybeieoys32dkwfbhzy64dsi75ilxygnukyjh5bbqg7iqencad2zoefpe.ipfs.dweb.link/god-6308823.jpg