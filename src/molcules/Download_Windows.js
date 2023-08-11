export default function Download_Windows() {

    document.getElementById("Windows").addEventListener("click", function() {
        // 파일 내용을 설정합니다. 여기서는 간단한 텍스트 파일로 가정합니다.
        const fileContent = "This is the content of Windows";

        // Blob 객체를 생성합니다.
        const blob = new Blob([fileContent], { type: "text/plain" });

        //type 교체.

        // a 태그를 생성하고 Blob 객체를 URL로 변환하여 다운로드 링크로 설정합니다.
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);

        // 다운로드할 파일의 이름을 지정합니다.
        downloadLink.download = "Windows.txt";

        //txt를 exe로 바꾸면 댐

        // a 태그를 클릭하여 다운로드를 시작합니다.
        downloadLink.click();

        // 사용이 끝난 a 태그를 제거합니다.
        URL.revokeObjectURL(downloadLink.href);
    });

}
