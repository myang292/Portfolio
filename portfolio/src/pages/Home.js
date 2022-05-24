

const Home = () => {

    function changeText(e) {
        e.innerHTML = "Software Engineer";
      }

    return(
        <div className="parent">
            <h2 onMouseOver={{changeText}}>
                Michelle Yang
            </h2>
            <p>
                Medical student turned programmer.
            </p>
            <p>
                Minnesota ✈️ Sint Maarten ✈️ San Diego
            </p>
            <h3>
                Ask me about my journey!
                <br />
                👇
            </h3>
        </div>
    )
}
export default Home