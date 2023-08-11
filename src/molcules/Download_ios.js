export default function Download_ios() {
    const downloadButton = document.getElementById("ios");
    let isDownloading = false; // 다운로드 중인지 여부를 추적하는 변수

    downloadButton.addEventListener("click", function() {
        if (isDownloading) {
            return; // 이미 다운로드 중인 경우 아무 작업도 하지 않음
        }

        isDownloading = true; // 다운로드 중 상태로 설정

        // 파일 내용을 설정합니다. 여기서는 간단한 텍스트 파일로 가정합니다.
        const fileContent = "This is the content of ios";

        // Blob 객체를 생성합니다.
       const blob = new Blob([fileContent], { type: "exe/plain" });

        // a 태그를 생성하고 Blob 객체를 URL로 변환하여 다운로드 링크로 설정합니다.
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);

        // 다운로드할 파일의 이름을 지정합니다.
        downloadLink.download = "ios.exe";

        // a 태그를 클릭하여 다운로드를 시작합니다.
        downloadLink.click();

        // 사용이 끝난 a 태그를 제거하고 다운로드 중 상태를 해제합니다.
        downloadLink.addEventListener("click", function() {
            URL.revokeObjectURL(downloadLink.href);
            downloadLink.remove();
            isDownloading = false;
        });
    });
}
