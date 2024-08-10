const Schedule = () => {
    return (
        <div className="schedule">
            <h1>Schedule Interview</h1>
            <div className="CandidateDetails">
                <h2>Candidate Details</h2>
                <form >
                    <label>Candidate ID:</label>
                    <input type="text" required  />
                    <button>Fetch</button>
                    <label>Name:</label>
                    <input type="text" required  />
                    <label>Email:</label>
                    <input type="email" required  />
                    <label>Phone No:</label>
                    <input type="number" required  />
                </form>
            </div>
            <div className="interviewDetails">
                <h2>Interview Details</h2>
                <form>
                    <label>Interview Date</label>
                    <input type="date" required/><br></br><br></br>
                    <label>Interview Time</label>
                    <input type="time" required/><br></br><br></br>
                    <label>Interview Duration</label>
                    <input type="number"/>
                </form>
            </div>
            <div className="Configuration">
                <h2>Configure Topics and Complexity</h2>
                <form >
                    <label>Topic</label>
                    <select name="topics" required>
                        <option value="DSA">DSA</option>
                        <option value="Javascript">Javascript</option>
                        <option value="CyberSecurity">CyberSecurity</option>
                        <option value="System Design">System Design</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                    </select>
                    <label >Complexity</label>
                    <select required>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </form>
            </div>
            <button id="btn">Schedule</button>
        </div>
    );
}
 
export default Schedule;