import formatDistanceToNowStric from "date-fns/formatDistanceToNowStrict";

export function formatCreatedAt(timestamp) {
  return formatDistanceToNowStric(new Date(timestamp), { addSuffix: true });
}
