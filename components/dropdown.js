import { Button, Select } from "native-base";
import config from "../utils/config";
import styles from "../assets/styles/custom";

const Dropdown = (props) => {
  return (
    <Select
      onValueChange={(e) => {
        console.log(e);
        props.onValueChange(e);
      }}
      marginBottom={7}
      height={41}
      borderRadius={10}
      borderColor={config.primary}
      defaultValue={""}
      selectedValue={props.value}
      fontSize={14}
      placeholder={props.placeholder}
      placeholderTextColor={styles.textColor}
      color={styles.textColor}
    >
      {props.rows && props.rows.length > 0 ? (
        props.rows.map((item) => {
          return (
            <Select.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          );
        })
      ) : (
        <Select.Item label="No Record Found" value="No Record Found" disabled />
      )}
    </Select>
  );
};

export default Dropdown;
