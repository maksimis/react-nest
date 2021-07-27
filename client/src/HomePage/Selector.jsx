import { createStyles, makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function MultipleSelect({names, handleChange, selectedNames}) {
  const classes = useStyles();

    return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Show...</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selectedNames}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected).map(name => (names.get(name))).join(', ')}
          MenuProps={MenuProps}
        >
          {Array.from(names.entries()).map(([key, value]) => (
            <MenuItem key={value} value={key}>
              <Checkbox checked={selectedNames.indexOf(key) > -1} />
              <ListItemText primary={value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}