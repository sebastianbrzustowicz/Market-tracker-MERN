import reactIcon from './images/react.png';
export default function About() {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                border: 0,
            }}
        />
    );

    return (
        <>
        <div className="footer">
        <ColoredLine color="black" />
            <div className='container'>
                Made with 
                <img src={reactIcon} className='devIcon' alt="Search" />
            </div>
            <h6>Made by <span>Sebastian Brzustowicz</span>. All rights reserved.</h6>
            <br /><br />
        </div>

        </>
    )
    
}