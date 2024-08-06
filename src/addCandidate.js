const AddCandidate = () => {
    return (
        <div className="AddCandidate">
            <h1>Add Candidate Details</h1>
            <div className="form">
                <form >
                    <label>Name:</label>
                    <input type="text" required  />
                    <label>Candidate ID:</label>
                    <input type="text" required  />
                    <label>Email Id:</label>
                    <input type="email" required/>
                    <label>Phone No</label>
                    <input type="number"  required/>
                    <label>Resume</label>
                    <input type="file" required/><br></br>
                    <button>Save</button>
                    <button>Cancel</button>
                </form>
            </div>
        </div>
    );
}
 
export default AddCandidate;