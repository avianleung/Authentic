import React from 'react';
import { useParams } from 'react-router-dom';

const WorkDetail = () => {
  const { workId } = useParams();

  return <div>Details for {workId}</div>;
};

export default WorkDetail;
