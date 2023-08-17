export default function Download_Android() {
    const downloadButton = document.getElementById('Android');

    downloadButton.addEventListener('click', handleDownload);

    function handleDownload() {
        // 다운로드 중인지 여부를 확인하는 변수
        let isDownloading = false;

        if (!isDownloading) {
            isDownloading = true;

            // const fileURL = '이 줄에 주소 경로 지정 하면 됨.';
            const fileName = 'Android_WordUniverse.zip';

            const a = document.createElement('a');
            // a.href = fileURL;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // 다운로드가 완료되었을 때 버튼을 활성화
            isDownloading = false;
        }
    }
}
