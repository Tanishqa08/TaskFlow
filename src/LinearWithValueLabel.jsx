import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabelAndValue(props) {
  const progressId = React.useId();
  return (
    <div>
      <Typography id={progressId} variant="body2" sx={{ color: "purple", marginTop: 2, }}>
        Progress
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            aria-labelledby={progressId}
            {...props}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{ color: "purple" }}>
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

LinearProgressWithLabelAndValue.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between `min` and `max`.
   */
  value: PropTypes.number.isRequired,
};


export default function LinearWithValueLabel({ progress }) {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabelAndValue value={progress} sx={{
        height: 7,
        borderRadius: 4,
        marginTop: 1,
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#7a007a",
        },
        backgroundColor: " #ccc7fa",
      }} />
    </Box>
  );
}