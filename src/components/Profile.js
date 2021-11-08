import puppy from "../assets/images/puppy.jpg";

function Profile() {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={puppy} alt="puppy"/>
                <div className="card-body">
                    <h5 className="card-title">Cute Puppy</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nunc ut lorem pellentesque vulputate.
                    </p>
                </div>
        </div>
    );
};

export default Profile;