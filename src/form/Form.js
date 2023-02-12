import '../form/Form.css';

const Form = () => {
    return(
        
        <div className="search">

        
        <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="search"
            placeholder="Vyhledat rořník vozidla"
            aria-label="Search"
          />
        </div>
        <div className="control">
          <button className="button" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: 24, height: 24 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

        </div>
      </div>
        </div>    
        

    );
}

export default Form;