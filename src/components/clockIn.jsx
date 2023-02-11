function ClockIn(){
    const [time, setTime] = useState(Null);

    const timeIn = () => {
        setTime(new Date());
    }
    const tim = timeIn;

}

function AddClockIn(){
    return (
        <div>
          <button onClick={ClockIn}>Clock In</button>
          <div>
            <clockIn></clockIn>
          </div>
        </div>
        
      );
}
    
    export default AddClockIn;
    