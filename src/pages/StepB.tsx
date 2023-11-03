import * as React from 'react';
import DropDownList from '../Compenonts/DropDownList';

export default function StepB() {
  const cityData = [
    { code: 'sz', name: '深圳', provinceCode: 'gd' },
    { code: 'gz', name: '广州', provinceCode: 'gd' },
    { code: 'fs', name: '佛山', provinceCode: 'gd' },
    { code: 'jm', name: '江门', provinceCode: 'gd' },
    { code: 'zs', name: '中山', provinceCode: 'gd' },
    { code: 'cd', name: '成都', provinceCode: 'sc' },
    { code: 'dz', name: '达州', provinceCode: 'sc' },
  ];

  const [provinces, setProvinces] = React.useState([
    { code: 'gd', name: '广东省' },
    { code: 'js', name: '江苏省' },
    { code: 'sc', name: '四川省' },
  ]);

  const [selectedProvince, setSelectedProvince] = React.useState('js');

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedProvince(event.target.value);
    setCities(() =>
      cityData.filter((x) => x.provinceCode == event.target.value)
    );
  };

  const [cities, setCities] = React.useState([{ code: 'cq', name: '重庆' }]);

  React.useEffect(() => {}, [selectedProvince]);

  return (
    <>
      <p>
        <code>useEffect</code> runs on every render. That means that when the
        count changes, a render happens, which then triggers another effect.
      </p>

      <DropDownList
        labelId="province"
        labelName="Province"
        lovs={provinces}
        selectedValue={selectedProvince}
        onChange={handleChange}
      ></DropDownList>

      <DropDownList
        labelId="city"
        labelName="City"
        lovs={cities}
      ></DropDownList>
    </>
  );
}
