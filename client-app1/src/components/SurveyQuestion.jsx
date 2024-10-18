import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function SurveyQuestion({ name, question, handleChange }) {

    return (
        <div className="question">
            <h2 className="card__header">
                {question}
            </h2>
            <div className='radio__group'>
                <label className="container__radio">
                    <input type="radio" value="1" name={name} onChange={handleChange} />
                    <span className="checkmark">
                        <span className='radio__label__text'>1</span>
                    </span>
                </label>
                <label className="container__radio">
                    <input type="radio" value="2" name={name} onChange={handleChange} />
                    <span className="checkmark">
                        <span className='radio__label__text'>2</span>

                    </span>
                </label>
                <label className="container__radio">
                    <input type="radio" value="3" name={name} onChange={handleChange} />
                    <span className="checkmark">
                        <span className='radio__label__text'>3</span>

                    </span>
                </label>
                <label className="container__radio">
                    <input type="radio" value="4" name={name} onChange={handleChange} />
                    <span className="checkmark">
                        <span className='radio__label__text'>4</span>

                    </span>
                </label>
                <label className="container__radio">
                    <input type="radio" value="5" name={name} onChange={handleChange} />
                    <span className="checkmark">
                        <span className='radio__label__text'>5</span>

                    </span>
                </label>
            </div>
        </div>
    )
}


{/* <FormLabel id={`question-${name}-group-label`}>{question}</FormLabel>
<RadioGroup
    row
    aria-labelledby={`question-${name}-group-label`}
    name={`question-${name}`}
    value={value}
    onChange={handleChange}
    sx={{
        '& .MuiSvgIcon-root': {
            fontSize: 50,
        },
    }}
>
    <FormControlLabel value="1" control={<Radio />} label="1"

    />
    <FormControlLabel value="2" control={<Radio />} label="2" />
    <FormControlLabel value="3" control={<Radio />} label="3" />
    <FormControlLabel value="4" control={<Radio />} label="4" />
    <FormControlLabel value="5" control={<Radio />} label="5" />

</RadioGroup> */}