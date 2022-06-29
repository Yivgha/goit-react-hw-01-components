import PropTypes from 'prop-types';
import {StatSection, Title, StatList, StatItem } from "./Statistics.styled";

export const Statistics = ({ title, stats, fn  }) => {
    return (
    <StatSection>
        {title && <Title>{title}</Title>}
        <StatList>
            {stats.map(({ id, label, percentage }) => (
                <StatItem key={id} style={{ backgroundColor: `${fn()}` }}>
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </StatItem>
            ))}
        </StatList>
    </StatSection>);
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
    fn: PropTypes.func.isRequired,
};