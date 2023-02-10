import clsx from "clsx";
import data from "../../data/home";

const Home = () => {
    const container = {
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid #949494",
        paddingBottom:"30px",
        paddingRight:"10px"
    };
    const leftElement = {
        width: "20%",
        marginTop: "100px",
        marginRight: "200px",
    };
    const rightElement = {
        width: "40%",
        marginTop: "100px",
        marginRight: "100px",
    };
    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className="" style={container}>
                    <div style={leftElement}>
                        <h1 style={{ fontWeight: "bold" }}>{item.title}</h1>
                        <h3 className="" style={{ fontWeight: "normal" }}>
                            {item.subtitle}
                        </h3>
                    </div>
                    <div style={rightElement}>
                        <h6>{item.content}</h6>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Home;
