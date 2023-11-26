export default function Feedback() {

    function handleMail(e) {
        window.location.href = "mailto:no-reply@example.com";
        e.preventDefault();
    }

    function handleTel(e) {
        window.location.href = "tel:+48123456789";
        e.preventDefault();
    }

    return (
        <> <br />
        <span className="container" style={{display: "flex", marginLeft: "auto", marginRight: "auto"}}>
            <div className="contact">
                <br />
                <p>Contact form</p>
                <form>
                    <label for="fullname">Full Name</label><br/>
                    <input type="text" name="fullname" id="fullname" placeholder="Your Name" autocomplete="off" /><br/>
                    <label for="email">Email</label><br/>
                    <input type="text" name="email" id="email" placeholder="Your email" autocomplete="off" /><br/>
                    <label for="subject">Subject</label><br/>
                    <input type="text" name="subject" id="subject" placeholder="Subject" autocomplete="off" /><br/>
                    <label for="message">Message</label><br/>
                    <textarea type="textarea" name="message" id="message" placeholder="Your message" autocomplete="off" /><br/>
                    <button name="send" id="send">Send Message</button>
                </form>
            </div>

            <div className="contact2">
                <p>Contact details</p>
                <p onClick={handleTel}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>&nbsp;
                    +48 123 456 789</p>
                <p onClick={handleMail}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>&nbsp;
                    Se.Brzustowicz@gmail.com</p>
                <p>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>&nbsp;
                    Toruń, Poland</p>
                <div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153625.22050386504!2d18.436743140268682!3d53.0132786444081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470334e1d994ec19%3A0x744a729a586a89c4!2zVG9ydcWE!5e0!3m2!1spl!2spl!4v1700515354280!5m2!1spl!2spl" 
                width="220" 
                height="220" 
                style={{border:"0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>

        </span>
        </>
    )
}