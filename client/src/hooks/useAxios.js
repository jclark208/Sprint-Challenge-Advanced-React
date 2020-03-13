import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = url => {
	const [data, setData] = useState({});

	useEffect(() => {
		axios
			.get(url)
			.then(res => {
				setData(res.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, [url]);

	return [data];
};
