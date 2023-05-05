const MomCard = ({mom}) => {

    const handleDownload = async () => {

        const meetingData = `${mom.text}
      `;

    
       
    
    
    
        
        const element = document.createElement("a");
        const file = new Blob([meetingData], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "momlive.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      };
    


    return (
        <div className="mom-card">
            <div className="mom-top">
                <div className="mom-info-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99996 13.1665C9.23607 13.1665 9.43413 13.0865 9.59413 12.9265C9.75357 12.7671 9.83329 12.5693 9.83329 12.3332V8.979C9.83329 8.74289 9.75357 8.54845 9.59413 8.39567C9.43413 8.24289 9.23607 8.1665 8.99996 8.1665C8.76385 8.1665 8.56607 8.24623 8.40663 8.40567C8.24663 8.56567 8.16663 8.76373 8.16663 8.99984V12.354C8.16663 12.5901 8.24663 12.7846 8.40663 12.9373C8.56607 13.0901 8.76385 13.1665 8.99996 13.1665ZM8.99996 6.49984C9.23607 6.49984 9.43413 6.41984 9.59413 6.25984C9.75357 6.10039 9.83329 5.90262 9.83329 5.6665C9.83329 5.43039 9.75357 5.23234 9.59413 5.07234C9.43413 4.91289 9.23607 4.83317 8.99996 4.83317C8.76385 4.83317 8.56607 4.91289 8.40663 5.07234C8.24663 5.23234 8.16663 5.43039 8.16663 5.6665C8.16663 5.90262 8.24663 6.10039 8.40663 6.25984C8.56607 6.41984 8.76385 6.49984 8.99996 6.49984ZM8.99996 17.3332C7.84718 17.3332 6.76385 17.1143 5.74996 16.6765C4.73607 16.2393 3.85413 15.6457 3.10413 14.8957C2.35413 14.1457 1.76051 13.2637 1.32329 12.2498C0.885515 11.2359 0.666626 10.1526 0.666626 8.99984C0.666626 7.84706 0.885515 6.76373 1.32329 5.74984C1.76051 4.73595 2.35413 3.854 3.10413 3.104C3.85413 2.354 4.73607 1.76011 5.74996 1.32234C6.76385 0.885115 7.84718 0.666504 8.99996 0.666504C10.1527 0.666504 11.2361 0.885115 12.25 1.32234C13.2638 1.76011 14.1458 2.354 14.8958 3.104C15.6458 3.854 16.2394 4.73595 16.6766 5.74984C17.1144 6.76373 17.3333 7.84706 17.3333 8.99984C17.3333 10.1526 17.1144 11.2359 16.6766 12.2498C16.2394 13.2637 15.6458 14.1457 14.8958 14.8957C14.1458 15.6457 13.2638 16.2393 12.25 16.6765C11.2361 17.1143 10.1527 17.3332 8.99996 17.3332ZM8.99996 15.6665C10.8472 15.6665 12.4202 15.0173 13.7191 13.719C15.0175 12.4201 15.6666 10.8471 15.6666 8.99984C15.6666 7.15262 15.0175 5.57956 13.7191 4.28067C12.4202 2.98234 10.8472 2.33317 8.99996 2.33317C7.15274 2.33317 5.57996 2.98234 4.28163 4.28067C2.98274 5.57956 2.33329 7.15262 2.33329 8.99984C2.33329 10.8471 2.98274 12.4201 4.28163 13.719C5.57996 15.0173 7.15274 15.6665 8.99996 15.6665Z" fill="white" />
                    </svg>
                </div>
                <div className="mom-title">
                    {mom.meeting_title}
                </div>
            </div>
            <div className="mom-bottom">
                <div className="mom-date">
                    {mom.host_name}
                </div>
                <div className="mom-download-icon" onClick={handleDownload}>
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.59 6H10V1C10 0.45 9.55 0 9 0H5C4.45 0 4 0.45 4 1V6H2.41C1.52 6 1.07 7.08 1.7 7.71L6.29 12.3C6.68 12.69 7.31 12.69 7.7 12.3L12.29 7.71C12.92 7.08 12.48 6 11.59 6ZM0 16C0 16.55 0.45 17 1 17H13C13.55 17 14 16.55 14 16C14 15.45 13.55 15 13 15H1C0.45 15 0 15.45 0 16Z" fill="white" />
                    </svg>
                </div>

            </div>
        </div>
    );
}

export default MomCard;